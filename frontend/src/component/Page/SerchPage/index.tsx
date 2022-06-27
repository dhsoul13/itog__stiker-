/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import SerchCard from '../../Common/SerchCard';
import SpinCastom from '../../Common/Spin';

type SerchPageType = {
  data?: any;
};

const SerchPage = ({ data = [] }: SerchPageType) => {
  const [post, setPost] = useState(data);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  useEffect(() => {
    if (data.length) {
      setPost(data);
      setLoading(true);
      setTotal(data.length);
      setCurrentPage(1);
    } else {
      setLoading(false);
      setPost([]);
      setTotal(0);
      setCurrentPage(1);
    }
  }, [data]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="serch__container container">
      <div className="serch__content">
        <h2 className="serch__title">{data?.length ? `Найдено ${data?.length}` : ''} </h2>
        <ul className="serch__list">
          {loading ? (
            <>
              {currentPost?.map((el: any, id: any) => (
                <SerchCard el={el} key={id} />
              ))}
              <div className="serch__paggination">
                <Pagination
                  pageSize={postPerPage}
                  total={total}
                  current={currentPage}
                  defaultCurrent={6}
                  onChange={(value) => {
                    setCurrentPage(value);
                  }}
                />
              </div>
            </>
          ) : (
            <div className="serch__spin">
              <SpinCastom />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SerchPage;
