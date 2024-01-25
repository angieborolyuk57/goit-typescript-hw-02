/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type Props = {
  title: string;
};


class Component<T> {
  props: T;

  constructor(props: T) {
    this.props = props;
  }
}

class Page extends Component<Props> {
  pageInfo() {
    if ('title' in this.props) {
      console.log(this.props.title);
    }
  }
}
