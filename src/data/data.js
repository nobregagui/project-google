import {
    Faker,
    FakerError,
    allFakers,
    allLocales,
    mergeLocales,
    Aircraft,
    CssFunction,
    CssSpace,
    Sex,
    af_ZA,
    ar,
    az,
    base,
    cs_CZ,
    de,
    de_AT,
    de_CH,
    dv,
    el,
    en,
    en_AU,
    en_AU_ocker,
    en_BORK,
    en_CA,
    en_GB,
    en_GH,
    en_HK,
    en_IE,
    en_IN,
    en_NG,
    en_US,
    en_ZA,
    es,
    es_MX,
    fa,
    fi,
    fr,
    fr_BE,
    fr_CA,
    fr_CH,
    fr_LU,
    he,
    hr,
    hu,
    hy,
    id_ID,
    it,
    ja,
    ka_GE,
    ko,
    lv,
    mk,
    nb_NO,
    ne,
    nl,
    nl_BE,
    pl,
    pt_BR,
    pt_PT,
    ro,
    ro_MD,
    ru,
    sk,
    sr_RS_latin,
    sv,
    th,
    tr,
    uk,
    ur,
    vi,
    zh_CN,
    zh_TW,
    zu_ZA,
    faker,
  } from '@faker-js/faker';
  
  const getImage = () => faker.image.animals(644, 362, true);
  const getType = () => faker.animal.type();
  const getUrl = () => faker.internet.url();
  const getText = () => faker.lorem.sentences();
  const getTitle = type => faker.animal[type]();
  
  const data = [...new Array(100)].map((item, index) => {
    const type = getType();
    return {
      type,
      id: index + 1,
      url: getUrl(),
      title: getTitle(type),
      description: getText(),
      image: getImage(),
    };
  });
  
  export default data;
  