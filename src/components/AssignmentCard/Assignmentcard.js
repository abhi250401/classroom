import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import "./AssignmentCard.css";
import { Link } from "react-router-dom";
function assignmentCard(props) {

    return (
        <Link to="/student/assignment"><div
            className="siz">
            <div className="classCar" >

                <div className="classCar__upper">
                    <div className="classCar__className">{props.number}</div>
                    <div className="classCar__creatorName">{props.subject}</div>

                </div>
                <div className="classCar__middle">
                    <PermIdentityIcon style={{ fontSize: 80, color: 'white' }} />

                </div>
                <div className="classCar__lower">
                    <IconButton>
                        <FolderOpenOutlined />
                    </IconButton>
                    <IconButton>
                        <AssignmentIndOutlined />
                    </IconButton>
                </div>
            </div></div> </Link>
    );
}
export default assignmentCard;