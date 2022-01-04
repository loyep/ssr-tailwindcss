import React, { useContext } from "react";
import { SProps, IContext } from "ssr-types-react";
import Slider from "@/components/slider";
import Rectangle from "@/components/rectangle";
import Search from "@/components/search";
import { IData } from "~/typings/data";
import { STORE_CONTEXT } from "_build/create-context";

export default (props: SProps) => {
  const { state, dispatch } = useContext<IContext<IData>>(STORE_CONTEXT);
  return (
    <div>
      <Search></Search>
      <div className="btn-blue">btn-blue</div>
      {state?.indexData?.data?.[0]?.components ? (
        <div>
          <Slider {...props} data={state.indexData.data[0].components} />
          <Rectangle {...props} data={state.indexData.data[1].components} />
        </div>
      ) : (
        <img
          src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif"
          className="loading"
        />
      )}
    </div>
  );
};