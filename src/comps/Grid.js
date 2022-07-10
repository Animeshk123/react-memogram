import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from './Card';
import Load from './Load';
import Value from './Value';

const Grid = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
    return (
        <>
            <div className='container'>
                <GridWrapper>
                    {
                      (loading) ? <Load/> : <Value data={props.data} />

                    }
                </GridWrapper>
            </div>
        </>
    )
}


const GridWrapper = styled.div`
    margin-top:2rem;
    width:100%;
    height:auto;
    columns:4;
    columns-gap:1rem;
    margin-bottom:2rem;
    @media screen and (max-width:500px){
        columns:1!important;
    }
    @media screen and (max-width:800px){
        columns:3;
    }
`;

export default Grid;
