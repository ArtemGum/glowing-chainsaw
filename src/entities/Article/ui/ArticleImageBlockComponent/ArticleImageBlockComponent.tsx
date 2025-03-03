import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImgBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImgBlock
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => (
        <div
            className={classNames(cls.articleimageblockcomponent, {}, [className])}
        >
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    ),
);
