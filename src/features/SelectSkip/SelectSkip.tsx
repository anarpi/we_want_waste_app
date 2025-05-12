import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { SelectSkipDefaultData, GetSkipContainerImageBySize } from './Models';
import styles from './SelectSkip.module.scss';
import { SkipCard } from '../../components/cards/SkipCard/SkipCard';

export const SelectSkip = () => {

  const { t } = useTranslation();
  const skips = SelectSkipDefaultData;

  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div>
      <h3 className="title">{t('SelectSkipPage.ChooseYourSkipSize')}</h3>
      <p className="text">{t('SelectSkipPage.SelectYourSkipSizeThatBestSuitsYourNeeds')}</p>
      <div className={styles.grid}>
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            size={skip.size}
            priceBeforeVat={skip.priceBeforeVat}
            hirePeriodDays={skip.hirePeriodDays}
            imageUrl={GetSkipContainerImageBySize(skip.size.toString()) ?? null}
            onSelect={() => setSelectedId(skip.id)}
            isSelected={selectedId === skip.id}
          />
        ))}
      </div>
    </div>
  );
};
