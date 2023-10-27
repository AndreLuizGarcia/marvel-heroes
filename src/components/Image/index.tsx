import { Classes } from '@blueprintjs/core';

import * as S from './styles';

type ImageProps = {
  isLoading: boolean;
  src: string;
};

function Image({ isLoading, src }: ImageProps) {
  if (isLoading) {
    return <S.ImagePlaceholder className={Classes.SKELETON} />;
  }

  return <img src={src} width={200} height={200} />;
}

export default Image;
