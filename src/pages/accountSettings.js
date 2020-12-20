import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function AccountSettings() {
    return (
        <div class="wapper">
            <Loader />
            <NavBar />
            <div>
                <section class="banner inner-page">
                    <div class="banner-img"><img src="images/banner/account-settings.jpg" alt="" /></div>
                    <div class="page-title">
                        <div class="container">
                            <h1>Account Settings</h1>
                        </div>
                    </div>
                </section>
                <section class="breadcrumb">
                    <div class="container">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="account-settings.html">Account Settings</a></li>
                        </ul>
                    </div>
                </section>
                <div class="my-accountPage">
                    <div class="container">
                        <div class="my-account">
                            <div class="account-tab">
                                <ul>
                                    <li class="active"><a href="javascript:void(0);" id="profile">Profile</a></li>
                                    <li><a href="javascript:void(0);" id="order">Order</a></li>
                                    <li><a href="javascript:void(0);" id="changePassword">Change Password</a></li>
                                </ul>
                            </div>
                            <div class="tab-content profile-con open">
                                <div class="personal-edit">
                                    <a href="#"><i class="fa fa-pencil"></i><span>Edit Profile</span></a>
                                </div>
                                <div class="personal-information">
                                    <div class="info-slide">
                                        <p><span>Name :</span>Stefan Hartmann</p>
                                    </div>
                                    <div class="info-slide">
                                        <p><span>Email ID :</span>StefanHartmann@jourrapide.com</p>
                                    </div>
                                    <div class="info-slide">
                                        <p><span>Mobile Number :</span>02692 83 14 96</p>
                                    </div>
                                    <div class="info-slide">
                                        <p><span>Date Of Birth :</span>June 6, 1987</p>
                                    </div>
                                    <div class="info-slide">
                                        <p><span>Gender :</span>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-content order-con">
                                <table class="booking-viewTable">
                                    <tr>
                                        <th>Courses ID</th>
                                        <th class="detail"> Courses Details</th>
                                        <th>Purchase Date</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr>
                                        <td><span class="small-heading">Courses ID</span>258452112500</td>
                                        <td class="detail">
                                            <span class="small-heading">Courses Details</span>
                                            <div class="detailTd">
                                                <label>Hiraba Farm</label>
                                                <p>Behind Shalby Hospital, Garden Road, Prahlad Nagar , Ahmedabad-380015</p>
                                            </div>
                                        </td>
                                        <td><span class="small-heading">Purchase Date</span>25<sup>th</sup> Aug 2015</td>
                                        <td><span class="small-heading">Amount</span>Rs. 42,710</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tab-content changePassword-con">
                                <div class="change-password ">
                                    <div class="input-box">
                                        <input type="text" placeholder="Current Password"/>
                            </div>
                                        <div class="input-box">
                                            <input type="text" placeholder="New Password"/>
                            </div>
                                            <div class="input-box">
                                                <input type="text" placeholder="Confirm Password"/>
                            </div>
                                                <div class="submit-box">
                                                    <input type="submit" value="Save" class="btn"/>
                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <section class="our-advantages">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="advantages-box">
                                                        <div class="img"><img src="images/learn-icon.png" alt=""/></div>
                                                            <h3>Learn at your own place</h3>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stanypesetting, </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="advantages-box">
                                                            <div class="img"><img src="images/save-timeIcon.png" alt=""/></div>
                                                                <h3>Save time and money</h3>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div class="advantages-box">
                                                                <div class="img"><img src="images/online-learningIcon.png" alt=""/></div>
                                                                    <h3>100% Online learning</h3>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
            </section>
                                            </div>
                                        </div>
        </div>
    );
}
export default AccountSettings;