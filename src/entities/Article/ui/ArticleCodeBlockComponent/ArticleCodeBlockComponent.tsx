import { FC, memo } from 'react';
import { Code } from 'shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({ block }: ArticleImageBlockComponentProps) => (
    <div className={cls.codeBlock}>
        <Code text={block.code} />
    </div>
));
