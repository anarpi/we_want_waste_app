
/* eslint-disable */
// I had to disable the linter here because the url is too long
// and the key should be the numbers to not to make the code more complicated
const SkipContainerImages = {
  '4': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg',
  '5': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg',
  '6': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg',
  '8': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg',
  '10': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg',
  '12': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg',
  '14': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg',
  '16': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg',
  '20': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg',
  '40': 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg',
};
/* eslint-enable */

export const GetSkipContainerImageBySize = (size: string): string | null => {

  switch (size) {
    case '4':
      return SkipContainerImages['4'];
    case '5':
      return SkipContainerImages['5'];
    case '6':
      return SkipContainerImages['6'];
    case '8':
      return SkipContainerImages['8'];
    case '10':
      return SkipContainerImages['10'];
    case '12':
      return SkipContainerImages['12'];
    case '14':
      return SkipContainerImages['14'];
    case '16':
      return SkipContainerImages['16'];
    case '20':
      return SkipContainerImages['20'];
    case '40':
      return SkipContainerImages['40'];
  }
  return null;
};

export const SelectSkipDefaultData = [
  {
    'id': 17933,
    'size': 4,
    'hirePeriodDays': 14,
    'transportCost': null,
    'perTonneCost': null,
    'priceBeforeVat': 278,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:46.897146',
    'updatedAt': '2025-04-07T13:16:52.813',
    'allowedOnRoad': true,
    'allowsHeavyWaste': true
  },
  {
    'id': 17934,
    'size': 6,
    'hirePeriodDays': 14,
    'transportCost': null,
    'perTonneCost': null,
    'priceBeforeVat': 305,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:46.897146',
    'updatedAt': '2025-04-07T13:16:52.992',
    'allowedOnRoad': true,
    'allowsHeavyWaste': true
  },
  {
    'id': 17935,
    'size': 8,
    'hirePeriodDays': 14,
    'transportCost': null,
    'perTonneCost': null,
    'priceBeforeVat': 375,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:46.897146',
    'updatedAt': '2025-04-07T13:16:53.171',
    'allowedOnRoad': true,
    'allowsHeavyWaste': true
  },
  {
    'id': 17936,
    'size': 10,
    'hirePeriodDays': 14,
    'transportCost': null,
    'perTonneCost': null,
    'priceBeforeVat': 400,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:46.897146',
    'updatedAt': '2025-04-07T13:16:53.339',
    'allowedOnRoad': false,
    'allowsHeavyWaste': false
  },
  {
    'id': 17937,
    'size': 12,
    'hirePeriodDays': 14,
    'transportCost': null,
    'perTonneCost': null,
    'priceBeforeVat': 439,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:46.897146',
    'updatedAt': '2025-04-07T13:16:53.516',
    'allowedOnRoad': false,
    'allowsHeavyWaste': false
  },
  {
    'id': 17938,
    'size': 14,
    'hirePeriodDays': 14,
    'transportCost': null,
    'perTonneCost': null,
    'priceBeforeVat': 470,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:46.897146',
    'updatedAt': '2025-04-07T13:16:53.69',
    'allowedOnRoad': false,
    'allowsHeavyWaste': false
  },
  {
    'id': 17939,
    'size': 16,
    'hirePeriodDays': 14,
    'transportCost': null,
    'perTonneCost': null,
    'priceBeforeVat': 496,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:46.897146',
    'updatedAt': '2025-04-07T13:16:53.876',
    'allowedOnRoad': false,
    'allowsHeavyWaste': false
  },
  {
    'id': 15124,
    'size': 20,
    'hirePeriodDays': 14,
    'transportCost': 248,
    'perTonneCost': 248,
    'priceBeforeVat': 992,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:40.344435',
    'updatedAt': '2025-04-07T13:16:52.434',
    'allowedOnRoad': false,
    'allowsHeavyWaste': true
  },
  {
    'id': 15125,
    'size': 40,
    'hirePeriodDays': 14,
    'transportCost': 248,
    'perTonneCost': 248,
    'priceBeforeVat': 992,
    'vat': 20,
    'postcode': 'NR32',
    'area': '',
    'forbidden': false,
    'createdAt': '2025-04-03T13:51:40.344435',
    'updatedAt': '2025-04-07T13:16:52.603',
    'allowedOnRoad': false,
    'allowsHeavyWaste': false
  }
];