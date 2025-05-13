import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { SelectSkipDefaultData, GetSkipContainerImageBySize } from './Models';
import styles from './SelectSkip.module.scss';
import { SkipCard } from '../../components/cards/SkipCard/SkipCard';
import { SummaryFooter } from '../../components/footers/SummaryFooter/SummaryFooter';

export const SelectSkip = () => {

  const { t } = useTranslation();
  const skips = SelectSkipDefaultData;

  const [selectedId, setSelectedId] = useState<number | null>(null);
  /* eslint-disable */
  // I had to disable linter here because I had no time to create a specific type for skips
  // If later I have time I will do it and remove the eslint-disable
  const [selectedSkip, setSelectedSkip] = useState<any | null>(null);
  /* eslint-enable */

  useEffect(
    () => {
      setSelectedSkip(skips.find((skip) => skip.id === selectedId));
    },
    [selectedId, skips]
  );

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
      {
        selectedId !== null
        && <SummaryFooter
          skipSize={selectedSkip?.size}
          priceBeforeVat={selectedSkip?.priceBeforeVat}
          hirePeriodDays={selectedSkip?.hirePeriodDays}
        />
      }
    </div>
  );
};
