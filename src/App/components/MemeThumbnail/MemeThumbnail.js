import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import style from "./MemeThumbnail.module.scss";
import FlowLayout from "../FlowLayout/FlowLayout";
import MemeViewer from "../MemeViewer/MemeViewer";
const MemeThumbnail = (props) => {
  console.log(props);
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      <FlowLayout>
        {props.memes.map((e, i) => (
          <MemeViewer
            key={e.id}
            meme={e}
            image={props.images.find((img) => img.id === e.imageId)}
          />
        ))}
      </FlowLayout>
    </div>
  );
};

MemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};

const mapStateToProps = (state, own) => {
  return {
    ...own,
    memes: state.ressources.memes,
    images: state.ressources.images,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);
