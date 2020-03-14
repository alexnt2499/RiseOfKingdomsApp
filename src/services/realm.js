import Realm from 'realm';

import SheduleSchema from '../schemas/Shedule';

export default function getRealm() {
  return Realm.open({
    schema: [SheduleSchema],
  });
}