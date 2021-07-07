/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initialState';

const Home = ({ mylist, trends, originals }) => {
  //const initialState = useInitialState(API);
  return /* initialState.length === 0 ? <h1>Loading...</h1> :  */(
    <h1>
      <Search />
      {/* initialState. */
        mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {/* initialState. */
                mylist.map((item) => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList
                  />
                ))
              }
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {/* initialState. */
            trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {/* initialState. */
            originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>
    </h1>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

// connect recibe 2 paranetros principales
//  1.- El Mapeo de los props 'mapStateToProps'
//  2.- Las acciones que vamos a disparar
export default connect(mapStateToProps, null)(Home);
