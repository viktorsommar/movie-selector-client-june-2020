import React from "react";
import { shallow } from 'enzyme'
import Movie from '../component/movie/movie_component.jsx'
import axios from 'axios'

describe('<Movie />', () => {
  it('should fetch the movies from movie list from the back end using axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<Movie />)
    expect(axiosSpy).toBeCalled()
  })
})