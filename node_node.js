testdatehanderStartChange = (value: Date) => {
    console.log('**StartChange**');
    // this.testdateNewChange('startdate')(value);
  };
  testdatehanderEndChange = (value: Date) => {
    console.log('**EndChange**');
  };

  testdateNewChange = (neme: string) => {
    console.log(name);
    console.log(`1つ目`);
    return (value: Date) => {
      console.log(`2つ目`);
      console.log(name);
    };
  };


dateTimeHandleChange = (...names: string[]) => (value: Date) => {
    const nextState: any = objectDeepCopy(this.state);
    let cursor: any = nextState;

    // 既存Stateをコピーして該当プロパティまで掘り下げ、対象の値のみ更新しsetStateを行う
    names.forEach((name, index) => {
      if (index + 1 === names.length) {
        cursor[name] = value.toString();
        return;
      }
      cursor = cursor[name];
    });

    this.setState(nextState);
};

// 