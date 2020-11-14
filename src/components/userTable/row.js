import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Row = (element, index) => (
  <tr>
    <td>{index + 1}</td>
    <td>{element.name}</td>
    <td>{element.capital}</td>
    <td>{element.region}</td>
    <td>{element.population}</td>
    <td>{element.nativeName}</td>
    <td>
      <LazyLoadImage src={element.flag} width="100" height="50" effect="blur" />
    </td>
  </tr>
);
