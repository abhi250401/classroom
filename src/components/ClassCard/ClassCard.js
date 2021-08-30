import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import "./ClassCard.css";
function ClassCard(props) {

    return (
        <div className="siz">
            <div className="classCard" >

                <div className="classCard__upper">
                    <div className="classCard__className">{props.name}</div>
                    <div className="classCard__creatorName">{props.email}</div>

                </div>
                <div className="classCard__middle">
                    <PermIdentityIcon style={{ fontSize: 80, color: 'white' }} />
                </div>
                <div className="classCard__lower">
                    <IconButton>
                        <FolderOpenOutlined />
                    </IconButton>
                    <IconButton>
                        <AssignmentIndOutlined />
                    </IconButton>
                </div>
            </div></div>
    );
}
export default ClassCard;