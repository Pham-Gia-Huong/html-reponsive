import React from 'react';
import SectionFeatureItem from './SectionItem/index';
import {LIST_ITEM_SECTION} from '../../contants/sectionFeature';
import './index.scss';

const SectionItem = () => {
  return (
    <>
      {LIST_ITEM_SECTION.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <SectionFeatureItem
              textContent={item.content}
              textHeader={item.header}
              icon={item.icon}
              size={item.size}
              color={item.color}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

const SectionFeature = () => {
  return (
    <section className="section-feature">
      <div className="row margin-bt-20">
        <h2>Get food fast — not fast food</h2>
        <p className="text-first">
          Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy.
          No time for cooking. So let us take care of that, we’re really good at it, we promise!
        </p>
      </div>
      <div className="row">
        <SectionItem />
      </div>
    </section>
  );
};

export default SectionFeature;
