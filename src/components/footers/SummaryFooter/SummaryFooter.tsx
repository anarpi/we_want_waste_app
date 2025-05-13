import { useTranslation } from 'react-i18next';

import { Button } from '../../buttons/Button/Button';
import styles from './SummaryFooter.module.scss';

type SummaryFooterProps = {
  skipSize?: number;
  priceBeforeVat?: number;
  hirePeriodDays?: number;
};

export function SummaryFooter(
  {
    skipSize,
    priceBeforeVat,
    hirePeriodDays
  }: SummaryFooterProps
) {

  const { t } = useTranslation();

  const currencyCode = '£';
  const currencyInFront = true;

  let priceText = currencyInFront ? currencyCode : '';
  priceText += priceBeforeVat;
  priceText += !currencyInFront ? ' ' + currencyCode : '';

  return <div className={styles.summary_footer}>
    <div className={styles.footer_container}>
      <div className={styles.texts_container}>
        <p className='text'>{skipSize} {t('SkipCard.Size')}</p>
        <p className='accent-text'>{priceText}</p>
        <p className='text'>{hirePeriodDays} {t('SkipCard.DayHirePeriod')}</p>
      </div>
      <div className={styles.button_holder}>
        <Button
          text={t('SummaryFooter.Back')}
          onClick={() => { }}
          className={styles.back_button}
        />
        <Button
          text={t('SummaryFooter.Continue')}
          onClick={() => { }}
          className={styles.continue_button}
        />
      </div>
    </div>
  </div>;
}