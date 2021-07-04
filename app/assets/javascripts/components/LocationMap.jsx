class LocationMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
    };
  }

  componentDidMount() {
    fetch(this.props.source).then(response => response.json()).then(json => {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: json.points[0],
      });

      json.points.forEach(position => {
        new google.maps.Marker({
          position,
          map,
        });
      });
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}