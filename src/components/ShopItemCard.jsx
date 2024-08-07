/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import LoadingBall from '/assets/img/loading.svg';
import { AddToCartButton, IconButton } from "../lib/buttons.jsx";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const ShopItemCard = ({ data }) => {
  return (
    <div className={'h-120 w-64 flex flex-col shadow-md rounded-xl'}>
      <div className={'h-64 max-h-64 p-4 flex justify-center items-center border-b-2'}>
        <img src={`${data.image}`} alt={`${data.title}`} className={`h-fit max-h-56 w-auto`}/>
      </div>
      <div className={'pt-4 flex-grow flex flex-col justify-between p-4'}>
        <div>
          <h3 className={'text-l font-bold leading-4'}>{data.title}</h3>
          <p className={`mt-1 text-sm text-neutral-500`}>{data.category}</p>
        </div>

        <div className={`flex items-center`}>
          <h3 className={'text-xl font-bold text-neutral-600'}>${data.price}</h3>
          <div className={'ml-auto flex'}>
            <AddToCartButton itemId={data.id}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const TestShopItemCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/1`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className={`w-full h-full flex justify-center items-center`}>
          <div className="text-xl font-medium "><img className={`w-24`} src={LoadingBall} alt="loading.."/></div>
        </div>
      )}

      {error && (
        <div className={`w-full h-full flex`}>
          <div className={'flex flex-col justify-center'}>
            <div>
              <h1 className={'text-3xl font-bold'}>Oops.. Something went wrong!</h1>
              <p>{error}</p>
              <IconButton path={'/'} text={'Go back'} icon={faRightFromBracket} params={'mt-6'}/>
            </div>
          </div>
        </div>
      )}

      {data && (
        <div className={`w-full h-full flex`}>
          <div className={'h-fit w-64 flex flex-col shadow-md rounded-xl'}>
            <div className={'h-64 flex justify-center items-center p-4 rounded-xl'}>
              <img src={`${data.image}`} alt={`${data.title}`} className={`h-full`}/>
            </div>
            <div className={`px-4`}>
              <h3 className={'text-l font-bold leading-4'}>{data.title}</h3>
              <p className={`mt-1 text-sm text-neutral-500`}>{data.category}</p>

              <div className={`my-4 flex items-center`}>
                <h3 className={'text-xl font-bold text-neutral-600'}>${data.price}</h3>
                <div className={'ml-auto flex'}>
                  <AddToCartButton itemId={data.id}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ShopItemCard, TestShopItemCard };