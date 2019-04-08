import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../../components/Hero';
import logo from '../../assets/img/logo.svg';

describe('Hero Component', () => {
  const hero = shallow(<Hero />);

  it('should have a logo present', () => {
    expect(hero.find('.hero__logo > img').exists()).toBe(true);
    expect(hero.find('.hero__logo > img').prop('src')).toEqual(logo);
  });

  it('should have navigation links present', () => {
    expect(hero.find('.hero__nav--links').exists()).toBe(true);
  });

  it('should have 2 call to action buttons', () => {
    expect(hero.find('.hero__cta').children().length).toEqual(2);
  });

  it('should have a large call to action text', () => {
    expect(hero.find('.hero__text--large').text()).toEqual('Authors Haven');
    expect(hero.find('.hero__text--normal').text()).toEqual('Building a community of like minded authors.');
  });

  it('should have a round navigation button', () => {
    expect(hero.find('.scroll').exists()).toBe(true);
  });
});