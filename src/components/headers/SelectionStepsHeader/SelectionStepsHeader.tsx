import { useTranslation } from 'react-i18next';

import styles from './SelectionStepsHeader.module.scss';

export function SelectionStepsHeader() {

  const { t } = useTranslation();

  return <div className={styles.selection_steps_header}>
    <p className='text'>{t('SelectionStepsHeader.Postcode')}</p>
    <div className={styles.divider}></div>
    <p className='text'>{t('SelectionStepsHeader.WasteType')}</p>
    <div className={styles.divider}></div>
    <p className='text'>{t('SelectionStepsHeader.SelectSkip')}</p>
    <div className={styles.divider}></div>
    <p className='text'>{t('SelectionStepsHeader.PermitCheck')}</p>
    <div className={styles.divider}></div>
    <p className='text'>{t('SelectionStepsHeader.ChooseDate')}</p>
    <div className={styles.divider}></div>
    <p className='text'>{t('SelectionStepsHeader.Payment')}</p>
  </div>;
}