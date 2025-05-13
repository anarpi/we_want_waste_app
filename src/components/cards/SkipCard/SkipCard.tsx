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
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
}

export const SkipCard = (
  {
    size,
    priceBeforeVat,
    hirePeriodDays,
    imageUrl,
    onSelect,
    isSelected,
    allowedOnRoad,
    allowsHeavyWaste,
  }: CardProps
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

  let cardClassName = styles.card_holder;
  if (isSelected) {
    cardClassName += ` ${styles.selected}`;
  }
  if (!allowsHeavyWaste) {
    cardClassName += ` ${styles.disabled_card}`;
  };

  return (
    <div
      className={cardClassName}
      onClick={allowsHeavyWaste ? onSelect : () => { }}
      aria-disabled={!allowsHeavyWaste}
    >
      <div>
        <div className={styles.image_holder}>
          <img src={imageUrl ?? noImage} />
          <div className={styles.floating_text}>
            <p className="text">{size} {t('SkipCard.Yards')}</p>
          </div>
          {(!allowedOnRoad || !allowsHeavyWaste) &&
            <div className={styles.warning_holder}>
              {!allowedOnRoad &&
                <div>
                  <p className="text">{t('SkipCard.NotAllowedOnRoad')}</p>
                </div>
              }
              {!allowsHeavyWaste &&
                <div>
                  <p className="text">{t('SkipCard.NotAllowedForHeavyWaste')}</p>
                </div>
              }
            </div>
          }
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