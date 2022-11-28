const defaults = {
    id: 'scout',
    imageUrl: '',
    address: {
        longitude: 0,
        latitude: 0
    }
};

export class ScoutDto {
    constructor(scout) {
        this.scout = {...defaults, ...scout, scoutId: CreateUUID()};
    }
}

function CreateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }