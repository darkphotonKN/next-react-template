import React, { Component } from 'react';

import Layout from '../../../components/shared/Layout/Layout';
import ContentFullLayout from '../../../components/shared/Layout/ContentFullLayout';

import PageLogoTitle from '../../../components/shared/MainContent/PageLogoTitle';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import fetch from 'isomorphic-fetch';
import axios from 'axios';

class Posting extends Component {
  state = {
    // form values
    groupName: '',
    name: '',
    email: '',
    schoolYear: '',
    noOfStudents: '',
    noOfTeachers: '',
    noOfParents: '',
    phone: '',
    phone1: '',
    phone2: '',
    phone3: '',
    address: '',

    selectedDate1: '',
    selectedTimeStart1: '',
    selectedTimeEnd1: '',

    selectedDate2: '',
    selectedTimeStart2: '',
    selectedTimeEnd2: '',

    selectedDate3: '',
    selectedTimeStart3: '',
    selectedTimeEnd3: '',

    allowPhoto: '0',
    content: ''
  };

  static async getInitialProps() {
    let data = [];
    let movieTimesData = [];

    try {
      const uri = `${
        process.env.API_ENDPOINT
      }/API/GetData.ashx?IT=MenuNT&Type=attribute&tid=39`;
      const encodedURI = encodeURI(uri);
      const response = await fetch(encodedURI);
      data = await response.json();

      const resMovieTimes = await fetch(
        encodeURI(
          `${
            process.env.API_ENDPOINT
          }/API/GetData.ashx?IT=MenuNT&Type=attribute&tid=41`
        )
      );

      movieTimesData = await resMovieTimes.json();
    } catch (err) {
      // log out error if there is one (note the log will be server-side)
      console.log(`Error occured while fetching: ${err}`);
    }

    // content.Data.forEach((temp, index) => {
    //   array.push({ show: true });
    // });

    return {
      movieData: data.Data,
      movieTimesData: movieTimesData.Data
    };
  }

  // handle form input changes
  handleInpChange = (e) => {
    this.setState({
      // property from event name, value from inputted value
      [e.target.name]: e.target.value
    });
  };

  // onSubmit method
  handleSubmit = async (e) => {
    // prevent default post html action
    e.preventDefault();

    // indicate that the server is posting client information
    this.setState({
      resMessage: '...在發布信息',
      resMessageActive: true
    });

    // resetting message being active to remove class, later adding to show
    // animation again with completed message
    setTimeout(() => this.setState({ resMessageActive: false }), 1000);

    const {
      groupName,
      name,
      email,
      noOfPeople,
      phone,
      project,
      address,
      date,
      time,
      phone1,
      phone2,
      phone3,
      schoolYear,
      noOfStudents,
      noOfTeachers,
      noOfParents,

      selectedDate1,
      selectedTimeStart1,
      selectedTimeEnd1,

      selectedDate2,
      selectedTimeStart2,
      selectedTimeEnd2,

      selectedDate3,
      selectedTimeStart3,
      selectedTimeEnd3,

      allowPhoto,
      content
    } = this.state;

    try {
      // acquire Token First
      const obj = {
        pagename: 'joinevent_3'
      };

      const jsonString = JSON.stringify(obj);

      const { data } = await axios.post(
        `${process.env.API_ENDPOINT}/api/postdata.ashx`,
        jsonString
      );
      const { Description: token } = await data; // get token from response data

      console.log('TOKEN:', token);

      const time1 = `${selectedDate1} ${selectedTimeStart1}~${selectedTimeEnd1}`;

      // use token to post to backend
      const postMailObj = {
        pagename: 'joinevent_3',
        token: token,
        name: name,
        email: email,
        groupname: groupName,
        phonenocell: phone,
        phoneno1: phone1,
        phoneno2: phone2,
        phoneno3: phone3,
        zid: '160',
        address: '濱海街10號1樓',
        schoolyear: '小6', // change to schoolYear
        studecnct: noOfStudents,
        teacherct: noOfTeachers,
        parentct: noOfParents,
        sex: '1',
        phoneno: phone,
        time1: '2019/4/1 09:30~10:00', // change to time1,
        time2: '2019/4/2 09:30~10:00',
        time3: '2019/4/3 09:30~10:00',
        allowphotoflag: allowPhoto,
        aid55: 18
      };

      console.log('POSTING TO BACKEND:', postMailObj);

      /* Example Payload From API DOCS:
      {
        "pagename": " joinevent_3",
        “token”:” 750FBC0182F4FE6251AACD16FA0D9F06D6CAEA14D2418C2F0B522CD2A823FE8F”,
        “name”:”jojo”,
        “email”:”jojo@champtron.com”,
        “groupname”:”北投國小”,
        “phonenocell”:”0900000000”,
        “phoneno1”:”022222222”,
        “phoneno2”:”023333333”,
        “phoneno3”:”024444444”,
        “zid”:”160,
        “address”:”濱海街10號1樓”,
        “schoolyear”:”小6”,
        “studecnct”:”20”,
        “teacherct”:”3”,
        “parentct”:”5”,
        “time1”:”2019/4/1 09:30~10:00”,
        “time2”:”2019/4/2 09:30~10:00”,
        “time3”:”2019/4/3 09:30~10:00”,
        “allowphotoflag”:”1”,
        “aid55”:”18”
        }
        */

      const jsonPostMailObj = JSON.stringify(postMailObj);
      console.log('jsonPostMailObj:', jsonPostMailObj);

      const response = await axios.post(
        `${process.env.API_ENDPOINT}/api/postdata.ashx`,
        // post stringified json payload to backend
        jsonPostMailObj
      );

      console.log('RESPONSE:', response);

      const resMessage = await response.data.Description;

      // update client side status message
      this.setState({
        resMessage,
        resMessageActive: true
      });
    } catch (err) {
      console.log(err);
    }

    //} else {
    //alert('invalid email');
    //}
  };

  handleDateChange = (date, day) => {
    console.log('Date: ', day.toLocaleDateString());
    console.log('Passed in Date:', date);
    switch (date) {
      case 'date1':
        this.setState({ selectedDate1: day.toLocaleDateString() });
        break;
      case 'date2':
        this.setState({ selectedDate2: day.toLocaleDateString() });
        break;
      case 'date3':
        this.setState({ selectedDate3: day.toLocaleDateString() });
        break;
      default:
        console.log("Date didn't match anything in record");
    }
  };

  handleResetForm = (e) => {
    e.preventDefault();
    this.setState({
      groupName: '',
      name: '',
      email: '',
      phone: '',
      noOfPeople: '',
      project: 0,
      name: '',
      address: '',
      date: '',
      time: '',
      content: ''
    });
  };

  handleSelectTime = (startOrEnd, part) => (e) => {
    console.log('SELECTED VALUE: ', e.target.value);
    console.log('START OR END: ', startOrEnd);
    console.log('PART: ', part);

    switch (part) {
      case 1:
        if (startOrEnd === 'start') {
          this.setState({ selectedTimeStart1: e.target.value });
        }
        if (startOrEnd === 'end') {
          this.setState({ selectedTimeEnd1: e.target.value });
        }
        break;
      case 2:
        if (startOrEnd === 'start') {
          this.setState({ selectedTimeStart2: e.target.value });
        }
        if (startOrEnd === 'end') {
          this.setState({ selectedTimeEnd2: e.target.value });
        }
        break;
      case 3:
        if (startOrEnd === 'start') {
          this.setState({ selectedTimeStart3: e.target.value });
        }
        if (startOrEnd === 'end') {
          this.setState({ selectedTimeEnd3: e.target.value });
        }
        break;

      default:
        console.log('The part passed is wrong.');
    }
  };

  handleResponseMessage = () => {
    const { resMessage } = this.state;
    console.log('RESPONSE:', resMessage);

    if (resMessage === '...在發布信息') {
      return <span style={{ color: '#7E5F15' }}>{resMessage}</span>;
    } else if (
      resMessage === '您的意見已受理,請靜待通知,謝謝' ||
      resMessage === 'OK'
    ) {
      return (
        <span style={{ color: '#739230' }}>您的意見已受理,請靜待通知,謝謝</span>
      );
    } else {
      return <span class="text-danger">{resMessage}</span>;
    }
  };

  render() {
    const bcLinks = [
      { path: '/application/feedback-mailbox', name: '申辦服務' },
      {
        path: '/application/online-application',
        name: '線上申請'
      },
      { name: '預約導覽解說' }
    ];

    /* Sidenav */
    const subNavList = [
      { name: '意見信箱', path: '/application/feedback-mailbox' },
      { name: '活動線上報名', path: '/application/online-registration' },
      {
        name: '線上申請',
        path: '/application/online-application/booking-guide',
        active: true,
        innernav: [
          {
            name: '預約導覽解說',
            path: '/application/online-application/booking-guide'
          },
          {
            name: '預約影片欣賞',
            path: '/application/online-application/movie-reservation'
          },
          {
            name: '申請分區證明',
            path: '/application/online-application/district-certificate'
          },
          {
            name: '環教課程預約',
            path: '/application/online-application/teaching-appointment',
            active: true
          },
          {
            name: '申請學術研究及',
            path:
              '/application/online-application/academic-research-certificate'
          }
        ]
      },
      { name: '下載專區', path: '/application/download-area' },
      { name: '單一窗口', path: '/application/single-window' }
    ];

    // destructuring all state values

    const {
      groupName,
      name,
      email,
      schoolYear,
      noOfStudents,
      noOfTeachers,
      noOfParents,
      phone,
      phone1,
      phone2,
      phone3,
      address,
      date,
      time,
      content
    } = this.state;

    console.log('STATE:', this.state);

    return (
      <Layout>
        <ContentFullLayout
          sectionName={'申辦服務'}
          imgUrl={'../../static/img/banner/application-banner.png'}
          bcLinks={bcLinks}
          subNavList={subNavList}
        >
          <div className="full-section application-section">
            <div className="container-full">
              <div className="row">
                <div className="col-md-12">
                  <PageLogoTitle title={'環教課程預約'} />
                </div>
              </div>
            </div>

            <hr />

            <div className="container-full">
              <div className="row mt-4 mb-3">
                <div className="col-md-12">
                  請檢視原申請時所填寫E-mail信箱，因為您申請時經本處確認後，系統即會發送一封受理通知信函至您申請時所填之E-mail信箱中。
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  {/* on form submit fire onFormSubmit function */}
                  <form className="content-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              學校名稱:
                            </label>

                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control content-input"
                                id="inputName"
                                placeholder="學校名稱"
                                title="學校名稱"
                                // handling changing inp + storing state
                                name="groupName"
                                onChange={this.handleInpChange}
                                value={groupName}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              聯絡人:
                            </label>

                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control content-input"
                                id="inputName"
                                placeholder="聯絡人"
                                title="聯絡人"
                                // handling changing inp + storing state
                                name="name"
                                onChange={this.handleInpChange}
                                value={name}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              手機號碼:
                            </label>

                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control content-input"
                                id="inputName"
                                placeholder="手機號碼"
                                title="手機號碼"
                                // handling changing inp + storing state
                                name="phone"
                                onChange={this.handleInpChange}
                                value={phone}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              電子郵件:
                            </label>

                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control content-input"
                                id="inputName"
                                placeholder="電子郵件"
                                title="電子郵件"
                                // handling changing inp + storing state
                                name="email"
                                onChange={this.handleInpChange}
                                value={email}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              聯絡電話:
                            </label>

                            <div className="col-md-8">
                              <div className="row">
                                <div className="col-md-4 form-inline">
                                  <small>TEL(日)</small>
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="電子郵件"
                                    title="電子郵件"
                                    // handling changing inp + storing state
                                    name="phone1"
                                    onChange={this.handleInpChange}
                                    value={phone1}
                                  />
                                </div>

                                <div className="col-md-4 form-inline">
                                  <small>TEL(日)</small>
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="電子郵件"
                                    title="電子郵件"
                                    // handling changing inp + storing state
                                    name="phone2"
                                    onChange={this.handleInpChange}
                                    value={phone2}
                                  />
                                </div>

                                <div className="col-md-4 form-inline">
                                  <small>TEL(日)</small>
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="電子郵件"
                                    title="電子郵件"
                                    // handling changing inp + storing state
                                    name="phone3"
                                    onChange={this.handleInpChange}
                                    value={phone3}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              聯絡地址:
                            </label>

                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control content-input"
                                id="inputName"
                                placeholder="聯絡地址"
                                title="聯絡地址"
                                // handling changing inp + storing state
                                name="address"
                                onChange={this.handleInpChange}
                                value={address}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              申請人數:
                            </label>

                            <div className="col-md-8">
                              <div className="row">
                                <div className="col-md-3 col-6">
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="申請人數"
                                    title="申請人數"
                                    // handling changing inp + storing state
                                    name="schoolYear"
                                    onChange={this.handleInpChange}
                                    value={schoolYear}
                                  />
                                </div>
                                <div className="col-md-3 col-6 mt-1">
                                  年級，
                                </div>

                                <div className="col-md-2 col-3 mt-1">學生</div>
                                <div className="col-md-3 col-4">
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="申請人數"
                                    title="申請人數"
                                    // handling changing inp + storing state
                                    name="noOfStudents"
                                    onChange={this.handleInpChange}
                                    value={noOfStudents}
                                  />
                                </div>
                                <div className="col-md-1 col-4 mt-1">人</div>

                                <div className="col-md-2 col-3 mt-1">老師</div>
                                <div className="col-md-3 col-4">
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="申請人數"
                                    title="申請人數"
                                    // handling changing inp + storing state
                                    name="noOfTeachers"
                                    onChange={this.handleInpChange}
                                    value={noOfTeachers}
                                  />
                                </div>
                                <div className="col-md-1 col-4 mt-1">人, </div>

                                <div className="col-md-2 col-3 mt-1">家長</div>
                                <div className="col-md-3 col-4">
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="申請人數"
                                    title="申請人數"
                                    // handling changing inp + storing state
                                    name="noOfParents"
                                    onChange={this.handleInpChange}
                                    value={noOfParents}
                                  />
                                </div>
                                <div className="col-md-1 col-4 mt-1">人</div>

                                {/* <div className="col-md-2 col-3 mt-1">合計</div>
                                <div className="col-md-3 col-4">
                                  <input
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    placeholder="申請人數"
                                    title="申請人數"
                                    // handling changing inp + storing state
                                    name="name"
                                    onChange={this.handleInpChange}
                                    value={name}
                                  />
                                </div>
                                <div className="col-md-1 col-4 mt-1">人</div> */}
                              </div>

                              <div className="row mt-1">
                                <div className="col-md-12">
                                  <small>
                                    因考量教學品質，故每梯次僅收一個班級20-30人為限
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              預定時間:
                            </label>

                            <div className="col-md-8">
                              <div className="row mb-2">
                                <div className="col-md-3">
                                  <DayPickerInput
                                    onDayChange={(day) =>
                                      this.handleDateChange('date1', day)
                                    }
                                  />
                                </div>

                                <div class="col-md-2 mt-1">
                                  <small>第1優先：</small>
                                </div>
                                <div className="col-md-3 col-4">
                                  <select
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    title="預約時間"
                                    // handling changing inp + storing state
                                    name="time"
                                    onChange={this.handleSelectTime('start', 1)}
                                  >
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                  </select>
                                </div>

                                <div className="col-md-1 col-1 mt-1 text-center">
                                  ~
                                </div>

                                <div className="col-md-3 col-4">
                                  <select
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    title="預約時間"
                                    // handling changing inp + storing state
                                    name="time"
                                    onChange={this.handleSelectTime('end', 1)}
                                  >
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:00">16:30</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-md-3">
                                  <DayPickerInput
                                    onDayChange={(day) =>
                                      this.handleDateChange('date2', day)
                                    }
                                  />
                                </div>

                                <div class="col-md-2 mt-1">
                                  <small>第2優先：</small>
                                </div>
                                <div className="col-md-3 col-4">
                                  <select
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    title="預約時間"
                                    // handling changing inp + storing state
                                    name="time"
                                    onChange={this.handleSelectTime('start', 2)}
                                  >
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                  </select>
                                </div>

                                <div className="col-md-1 col-1 mt-1 text-center">
                                  ~
                                </div>

                                <div className="col-md-3 col-4">
                                  <select
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    title="預約時間"
                                    // handling changing inp + storing state
                                    name="time"
                                    onChange={this.handleSelectTime('end', 2)}
                                  >
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:00">16:30</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-md-3">
                                  <DayPickerInput
                                    onDayChange={(day) =>
                                      this.handleDateChange('date3', day)
                                    }
                                  />
                                </div>

                                <div class="col-md-2 mt-1">
                                  <small>第3優先：</small>
                                </div>
                                <div className="col-md-3 col-4">
                                  <select
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    title="預約時間"
                                    // handling changing inp + storing state
                                    name="time"
                                    onChange={this.handleSelectTime('start', 3)}
                                  >
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                  </select>
                                </div>

                                <div className="col-md-1 col-1 mt-1 text-center">
                                  ~
                                </div>

                                <div className="col-md-3 col-4">
                                  <select
                                    type="text"
                                    className="form-control content-input"
                                    id="inputName"
                                    title="預約時間"
                                    // handling changing inp + storing state
                                    name="time"
                                    onChange={this.handleSelectTime('end', 3)}
                                  >
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:00">16:30</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <label
                          htmlFor="inputVerification"
                          className="col-md-3 col-12 d-md-flex"
                        >
                          費用:
                        </label>

                        <div className="col-md-8">
                          課程免費，午餐、保險費及交通請自理，如有疑問歡迎來電洽詢本處環教教師
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 offset-md-3">
                          <small>是否同意活動照片供本處宣傳使用：</small>
                        </div>
                        <div className="col-md-2 col-3 form-inline">
                          <input
                            type="radio"
                            className="mr-1"
                            id="inputName"
                            placeholder="請輸入姓名"
                            title="請輸入姓名"
                            name="allowPhoto"
                            // handling changing inp + storing state
                            onChange={() => this.setState({ allowPhoto: 1 })}
                          />
                          是
                        </div>

                        <div className="col-md-2 col-3 form-inline">
                          <input
                            type="radio"
                            className="mr-1"
                            id="inputName"
                            placeholder="請輸入姓名"
                            title="請輸入姓名"
                            name="allowPhoto"
                            // handling changing inp + storing state
                            onChange={() => this.setState({ allowPhoto: 0 })}
                            value={this.state.allowPhoto}
                          />
                          否
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              htmlFor="inputName"
                              className="col-md-3 col-12 d-md-flex"
                            >
                              預約申請項目:
                            </label>

                            <div className="col-md-9 table-responsive">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th>
                                      <small>戶外教學課程名稱</small>
                                    </th>
                                    <th>
                                      <small>適合年級</small>
                                    </th>
                                    <th>
                                      <small>課程時間 (不含午休時間)</small>
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr>
                                    <td>
                                      <small>
                                        <input
                                          type="radio"
                                          className="mr-1"
                                          id="inputName"
                                          placeholder="請輸入姓名"
                                          title="請輸入姓名"
                                          // handling changing inp + storing state
                                          name="name"
                                          onChange={this.handleInpChange}
                                          value={name}
                                        />
                                        花果山中尋大聖
                                      </small>
                                    </td>
                                    <td>
                                      <small>4-6年級</small>
                                    </td>
                                    <td>
                                      <small>4.5小時</small>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>
                                      <small>
                                        <input
                                          type="radio"
                                          className="mr-1"
                                          id="inputName"
                                          placeholder="請輸入姓名"
                                          title="請輸入姓名"
                                          // handling changing inp + storing state
                                          name="name"
                                          onChange={this.handleInpChange}
                                          value={name}
                                        />
                                        「鈣」一座山-壽山地質調查隊
                                      </small>
                                    </td>
                                    <td>
                                      <small>7-9年級</small>
                                    </td>
                                    <td>
                                      <small>4小時</small>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>
                                      <small>
                                        <input
                                          type="radio"
                                          className="mr-1"
                                          id="inputName"
                                          placeholder="請輸入姓名"
                                          title="請輸入姓名"
                                          // handling changing inp + storing state
                                          name="name"
                                          onChange={this.handleInpChange}
                                          value={name}
                                        />
                                        旗後山海關
                                      </small>
                                    </td>
                                    <td>
                                      <small>6-8年級</small>
                                    </td>
                                    <td>
                                      <small>4.5小時</small>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>
                                      <small>
                                        <input
                                          type="radio"
                                          className="mr-1"
                                          id="inputName"
                                          placeholder="請輸入姓名"
                                          title="請輸入姓名"
                                          // handling changing inp + storing state
                                          name="name"
                                          onChange={this.handleInpChange}
                                          value={name}
                                        />
                                        乞丐趕廟公-外來入侵種生物
                                      </small>
                                    </td>
                                    <td>
                                      <small>5-7年級</small>
                                    </td>
                                    <td>
                                      <small>4小時</small>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <label
                          htmlFor="inputVerification"
                          className="col-md-3 col-12 d-md-flex"
                        >
                          驗證碼:
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <label
                          htmlFor="inputVerification"
                          className="col-md-3 col-12 d-md-flex"
                        >
                          請輸入驗證碼:
                        </label>
                      </div>
                    </div>

                    <hr className="normal" />

                    {/* Message to client for posting */}
                    <div
                      className={
                        this.state.resMessageActive
                          ? 'response-message active'
                          : 'response-message'
                      }
                    >
                      {this.handleResponseMessage()}
                    </div>

                    <div className="row mt-2 mb-4">
                      <div className="col-md-8">
                        <button className="btn btn-orange-gradient mr-5">
                          確認送出
                        </button>
                        <button className="btn btn-grey">重新填寫</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ContentFullLayout>
      </Layout>
    );
  }
}

export default Posting;
