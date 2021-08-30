import React, { useState } from 'react';
import ClassCard from "../ClassCard/ClassCard";
import "./Dashboard.css";
import AssignmentCard from "../AssignmentCard/Assignmentcard";
import MBTN from './Modal';
import Calendar from 'react-calendar';

function Dashboard() {

    return (

        <div className="dashboard">

            <div className="dashboard__classContainer">



                <ClassCard
                    name="Java"
                    email="Prabhjot Kaur"
                />

                <ClassCard name="SE"
                    email="sonika" />

                <AssignmentCard number="Assignment no. 1"
                    subject="Java"
                />
                <AssignmentCard number="Assignment no. 1"
                    subject="SE"
                />


            </div>
            <div classname="redirect1">
                <a target="_blank" href="https://abhi250401.github.io/">  <button class="button-28" role="button" type="button" >TO-DO list</button></a>

                <MBTN />

            </div>
        </div>
    );
}
export default Dashboard;