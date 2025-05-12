import { useTranslation } from 'react-i18next';

export const SelectSkip = () => {

  const { t } = useTranslation();

  return (
    <div>
      <h3 className="title">{t('SelectSkipPage.ChooseYourSkipSize')}</h3>
      <p className="text">{t('SelectSkipPage.SelectYourSkipSizeThatBestSuitsYourNeeds')}</p>
    </div>
  );
};
