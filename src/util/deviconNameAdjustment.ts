export const deviconNameAdjustment = (language: string) => {
  let adjustedName: string = language;
  const reqNameAdjustLanguages = [
    { name: 'HTML', adjustedName: 'HTML5' },
    { name: 'CSS', adjustedName: 'CSS3' },
    { name: 'SCSS', adjustedName: 'SASS' },
    { name: 'Dockerfile', adjustedName: 'DOCKER' },
  ];

  reqNameAdjustLanguages.map((reqLang) => {
    if (language === reqLang.name) {
      adjustedName = reqLang.adjustedName;
    }
  });

  return adjustedName;
};
