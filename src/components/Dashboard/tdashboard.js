import React from "react";
import ClassCard from "../ClassCard/ClassCard";
import "./Dashboard.css";
import AssignmentCard from "../AssignmentCard/Assignmentcard";
import MBTN from './tModal';
import { Link } from "react-router-dom";
function Dashboard() {

    return (

        <div className="dashboard">

            <div className="dashboard__classContainer">



                <ClassCard
                    name="IT"
                    email="5th sem "
                />

                <ClassCard name="Computer science"
                    email="5th sem" />

                <Link to="/teacher/assignment"></Link> <AssignmentCard number="ASSIGNMENT -1"
                    subject=" IT-1"
                /><Link />


            </div>
            <div classname="redirect1">
                <a target="_blank" href="https://abhi250401.github.io/">  <button class="button-28" role="button" type="button" >To-do list</button></a>



                <MBTN />
            </div>
        </div >
    );
}
export default Dashboard;