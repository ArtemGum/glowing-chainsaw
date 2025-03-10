import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails />
        </div>
    );
};

export default memo(ArticleDetailsPage);
