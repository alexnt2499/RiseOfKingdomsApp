import Realm from 'realm';

import SheduleSchema from '../schemas/Shedule';
import TalentsSchema from '../schemas/Talens';
export default function getRealm() {
  return Realm.open({
    schema: [SheduleSchema,TalentsSchema],
  });
}