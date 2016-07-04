// ReactJS - Jobsearch iFrame update

var LocationList = React.createClass({
    render() {
        var list = this.props.locItems.map(function(locList, i){
          return <option key={i} value={locList.value}>{locList.title}</option>
        });
        return (
            <select className="form-control" onChange={this.props.handleLoc}>
            {list}
            </select>
        )
    }
});

var ClassificationList = React.createClass({
    render() {
        return (
            <select className="form-control" onChange={this.props.handleClas}>
                {
                    this.props.cItems.map(function(cItem, i){
                        return <option key={i} value={cItem.value}>{cItem.title}</option>
                    })
                }
            </select>
        )
    }
});

var PositionList = React.createClass({
    render() {
        return (
            <select className="form-control" onChange={this.props.handlePos}>
                {
                    this.props.pItems.map(function(pItem, i){
                        return <option key={i} value={pItem.value}>{pItem.title}</option>
                    })
                }
            </select>
        )
    }
});

var JobSearch = React.createClass({

    getInitialState: function() {
        return {
            location: '',
            classification: '',
            position: ''
        }
    },

    handleLocation: function(e) {
        this.setState({location: e.target.value});
    },

    handleClassification: function(e) {
        this.setState({classification: e.target.value});
    },

    handlePosition: function(e) {
        this.setState({position: e.target.value});
    },

    render() {

        var locationList = {
          myLoc: [
            {value: 'all',title: 'Any'},
            {value: 'NSW',title: 'NSW'},
            {value: 'VIC',title: 'QLD'},
            {value: 'WA',title: 'WA'},
            {value: 'SA',title: 'SA'},
            {value: 'TAS',title: 'TAS'},
            {value: 'ACT',title: 'ACT'},
            {value: 'NT',title: 'NT'},
            {value: 'HK',title: 'HK'},
            {value: 'VIET',title: 'VIET'},
            {value: 'SING',title: 'SING'},
            {value: 'Other',title: 'Other'}
          ]
        };

        var classificationList = {
          myClasList: [
            {value: '',title: 'Any'},
            {value: 'Accounting',title: 'Accounting'},
            {value: 'Admin / Office Support',title: 'Admin / Office Support'},
            {value: 'Executive',title: 'Executive'},
            {value: 'Graduate',title: 'Graduate'},
            {value: 'HR & Recruitment',title: 'HR & Recruitment'},
            {value: 'IT',title: 'IT'},
            {value: 'Marketing',title: 'Marketing'},
            {value: 'Sales',title: 'Sales'},
            {value: 'Other',title: 'Other'}
          ]
        };

        var positionList = {
          myPosList: [
            {value: '',title: 'Any'},
            {value: 'Administrator',title: 'Administrator'},
            {value: 'Architects',title: 'Architects'},
            {value: 'Business / System Analysis',title: 'Business / System Analysis'}
          ]
        };

        return (
          <div className="container">
            <div className="row">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">ReactJS JobSearch iFrame</h3>
                </div>
                <div className="panel-body">
                  <div className="col-md-6">
                    <label>Location:</label>
                    <LocationList handleLoc={this.handleLocation} locItems={locationList.myLoc} />
                    <br />
                    <label>Classification:</label>
                    <ClassificationList handleClas={this.handleClassification} cItems={classificationList.myClasList} />
                    <br />
                    <label>Position:</label>
                    <PositionList handlePos={this.handlePosition} pItems={positionList.myPosList} />
                  </div>
                  <div className="col-md-6">
                    <iframe width="100%" height="650px" className="jsearchframe" src={"http://smsmt.force.com/jobpost/searchjob?websitename=SMS%20website&location=" + this.state.location + "&classification=" + this.state.classification + "&positions=" + this.state.position + "&keywords=&wmode=transparent"} wmode="Opaque"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
  }
});

ReactDOM.render(<JobSearch />, document.body);
