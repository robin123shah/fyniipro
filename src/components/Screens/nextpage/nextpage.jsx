import React from 'react';
import './home-article.css';
import { MdBookmarkAdd, MdShare, MdThumbUpOffAlt } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

const nextpage = () => {
  return (
    <div className='home-article'>
      <div className='home-article-page'>
        <section className='home-article-page-heading'>
          <div>
            <h2>"How to choose right career for you"</h2>
          </div>
        </section>
        <section className='home-article-page-card'>
          <div className='home-article-page-card-date'>
            <h5>September 30, 2022</h5>
          </div>
          <div className='home-article-page-card-image'>
            <img className='' src={require("./development.jpg")} alt='' />
          </div>
          <div className='home-article-page-card-icons'>
            <div className='home-article-page-save'><MdBookmarkAdd /></div>
            <div className='home-article-page-share'><MdShare /></div>
            <div className='home-article-page-view'><IoMdEye /></div>
            <div className='home-article-page-like'><MdThumbUpOffAlt /></div>
          </div>
        </section>
        <section className='home-article-page-content'>
          <div className='home-article-page-content-heading'>
            <h4>Fynii</h4>
          </div>
          <div className='home-article-page-content-para'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eos illum corrupti, rem mollitia, suscipit velit sit animi dignissimos cupiditate facere placeat est nam sequi! Similique eum eveniet quaerat temporibus error soluta corrupti quidem veniam suscipit, necessitatibus est aliquam accusantium excepturi unde recusandae dolor adipisci molestias minus impedit cumque officiis repudiandae quod. Harum esse, aliquam ab deleniti velit doloremque in? Omnis dicta ab culpa repudiandae ullam cumque temporibus velit natus voluptate soluta nulla, asperiores impedit ipsum illum. Impedit ipsam inventore voluptatum nemo reprehenderit sequi quos facilis vel! Perferendis rem fugit neque, quibusdam alias magni, quidem accusantium incidunt eveniet officiis culpa?</p>
          </div>
        </section>
      </div>
      <div className='home-related-article-page'>
        <div className='home-related-article-page-heading'>
          <h2>Related Articles</h2>
        </div>
        <div className='home-related-article-page-cards'>
          <div className='home-related-article-page-cards-wrapper'>
            <div className='related-article-page-cards-wrapper-card'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default nextpage