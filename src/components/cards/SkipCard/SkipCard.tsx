import { useTranslation } from 'react-i18next';

import noImage from '../../../assets/no_image.jpg';
import styles from './SkipCard.module.scss';
import { Button } from '../../buttons/Button/Button';

type CardProps = {
  size: number;
  priceBeforeVat: number;
  hirePeriodDays: number;
  imageUrl?: string | null;
  isSelected: boolean;
  onSelect: () => void;
}

export const SkipCard = (
  { size, priceBeforeVat, hirePeriodDays, imageUrl, onSelect, isSelected }: CardProps
) => {

  const { t } = useTranslation();

  const currencyCode = '£';
  const currencyInFront = true;

  let priceText = currencyInFront ? currencyCode : '';
  priceText += priceBeforeVat;
  priceText += !currencyInFront ? ' ' + currencyCode : '';

  const selectButtonText = isSelected
    ? t('SkipCard.Selected')
    : t('SkipCard.SelectThisSkip');

  let buttonClassName = styles.select_button;
  if (!isSelected) {
    buttonClassName += ` ${styles.arrow}`;
    buttonClassName += ` ${styles.not_selected_button}`;
  };

  return (
    <div
      className={`${styles.card_holder} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
    >
      <div className={styles.card}>
        <div className={styles.image_holder}>
          <img src={imageUrl ?? noImage} />
          <div className={styles.floating_text}>
            <p className="text">{size} {t('SkipCard.Yards')}</p>
          </div>
        </div>
        <div className={styles.text_holder}>
          <h3 className="title">{size} {t('SkipCard.YardSkip')}</h3>
          <p className="text">{hirePeriodDays} {t('SkipCard.DayHirePeriod')}</p>
          <p className="accent-text">{priceText}</p>
        </div>
      </div>
      <Button
        className={buttonClassName}
        text={selectButtonText}
        onClick={onSelect}
      />
    </div>
  );
};