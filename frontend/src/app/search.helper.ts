export class SearchHelper {

  static branchMappings = {
    'Chemical Engg.': 'CHE',
    'Civil Engg.': 'CE',
    'Chemistry': 'CHM',
    'Mechanical Engineering': 'ME',
    'Computer Science & Engg.': 'CSE',
    'Aerospace Engg.': 'AE',
    'Electrical Engg.': 'EE',
    'Materials Science & Engg.': 'MSE',
    'Biol.Sci. And Bio.Engg.': 'BSBE',
    'Mathematics': 'MTH',
    'Physics': 'PHY',
    'Ind. & Management Engg.': 'IME',
    'Humanities & Soc. Sciences': 'HSS',
    'Economics': 'ECO',
    'Environmental Engg. & Mgmt': 'EEM',
    'Earth Sciences': 'ES',
    'Master Of Design': 'MDes',
    'Dean Of Resource & Alumni': 'DORA',
    'Dean Of Academic Affairs': 'DOAA'
  };

  static ParseYear(value: string) {
    if (value.startsWith('Y')) {
      if (value[1] > '7') {
        return value.substr(0, 2);
      } else {
        return 'Other';
      }
    } else {
      if (value[0] === '1') {
        return 'Y' + value.substr(0, 2);
      } else {
        return 'Other';
      }
    }
  }

  static ParseBranch(value: string) {
    if (this.branchMappings[value] !== undefined) {
      return this.branchMappings[value];
    }
    return value;
  }

}
