'use client';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faRotateBack,
} from '@fortawesome/free-solid-svg-icons';
import Image, { StaticImageData } from 'next/image';

export type ZoomImgProps = {
  src: StaticImageData;
  alt: string;
};

function ZoomImg({ src, alt }: ZoomImgProps) {
  return (
    <div className="relative mt-8">
      <TransformWrapper wheel={{ wheelDisabled: true }}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute bottom-2 right-2 z-10 flex flex-row rounded bg-gray-950 drop-shadow-lg">
              <button
                className="flex items-center border-r-2 border-gray-950 p-3 text-white hover:rounded-l hover:bg-black hover:text-teal-400"
                onClick={() => zoomIn()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className="flex items-center border-r-2 border-gray-950 p-3 text-white hover:bg-black hover:text-teal-400"
                onClick={() => zoomOut()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button
                className="flex items-center p-3 text-white hover:rounded-r hover:bg-black hover:text-teal-400"
                onClick={() => resetTransform()}
              >
                <FontAwesomeIcon icon={faRotateBack} />
              </button>
            </div>
            <TransformComponent>
              <Image
                src={src}
                alt={alt}
                className="w-full rounded-2xl object-cover"
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}

export default ZoomImg;
