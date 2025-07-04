import React, { useState, useRef, useContext } from "react";
import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  Badge
} from "react-bootstrap";
import axios from "axios";
import Popover from 'react-bootstrap/Popover';

import { API } from "config/api";

const TableOrder = ({dataRocket}) => {
 
  const [idTransporter, setIdTransporter] = useState();
    const [asal, setAsal] = useState();
    const [idEdit, setIdEdit] = useState();
    const [idHapus, setIdHapus] = useState();
    const [tujuan, setTujuan] = useState();
    const [vehicle, setVehicle] = useState();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
   const [show2, setShow2] = useState(false);
   const handleClose = () => setShow(false);
      const handleClose2 = () => setShow2(false);
  const handleEdit = (data) => {
    setShow(true)
    setIdEdit(data?.id_shipment)
    setAsal(data?.loc_asal)
    setTujuan(data?.loc_tujuan)
    setVehicle(data?.id_vehicle)
     setIdTransporter(data?.id_transporter)
  };

 
  return (
    <>
      <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {dataRocket?.data &&
                      dataRocket?.data?.map((data, i) => (
        <tr>
          <td>{i+1}</td>
          <td >
              <img src={data?.links?.flickr?.original[0]} alt="Logo" className="pic-rocket w-80 px-2"/> 
          </td>
          <td>
            <div onClick={() => navigate(`/detail/${data?.id}`)}>
            {data?.name}
            </div>
            </td>
          <td> {data?.details}</td>
        </tr>
        ))} 
      </tbody>
    </Table>

       
     
          </>
  );
}

const mapStatetoProps = (state) => {
  return { statusLog: state.status };
};

export default connect(mapStatetoProps)(TableOrder);