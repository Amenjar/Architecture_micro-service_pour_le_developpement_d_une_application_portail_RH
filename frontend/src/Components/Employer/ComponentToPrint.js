import { Button } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrent } from "../../redux/action/Authaction";
import { deletePayslip, getPayslips } from "../../redux/action/PayslipAction";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPayslips());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  const Navigate = useNavigate();
  const user = useSelector((state) => state.AuthReducer.user);
  const Payslips = useSelector((state) => state.PayslipReducer.Payslips);
  return (
    <div>
      {Payslips !== null ? (
        Payslips.filter((Payslip) => Payslip.CIN === user.cin).map(
          (Payslip) => (
            <div>
              <div ref={ref} style={{ marginLeft: "300px" }}>
                <meta
                  httpEquiv="content-type"
                  content="text/html; charset=iso-8859-1"
                />
                <title />
                <meta name="generator" content="https://conversiontools.io" />
                <meta name="author" content="EuropeSoftwares" />
                <meta name="created" content="2008-01-15T09:58:18" />
                <meta name="changedby" content="Admin" />
                <meta name="changed" content="2018-01-22T11:48:55" />
                <meta name="AppVersion" content="15.0300" />
                <meta name="Company" content="EuropeSoftwares" />
                <meta name="DocSecurity" content={0} />
                <meta name="HyperlinksChanged" content="false" />
                <meta name="LinksUpToDate" content="false" />
                <meta name="ScaleCrop" content="false" />
                <meta name="ShareDoc" content="false" />
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n\t\tbody,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:"Arial"; font-size:x-small }\n\t\ta.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } \n\t\ta.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } \n\t\tcomment { display:none;  } \n\t\t.sorttable_sorted,.sorttable_sorted_reverse,table.sortable thead td:not(.sorttable_sorted):not(.sorttable_sorted_reverse):not(.sorttable_nosort) { white-space: nowrap; cursor: pointer; }\n\t\ttable.sortable thead td:not(.sorttable_sorted):not(.sorttable_sorted_reverse):not(.sorttable_nosort):after { content:" \\25B4\\25BE"; }\n\t',
                  }}
                />
                <table cellSpacing={0} border={0} className="sortable">
                  <colgroup span={4} width={85} />
                  <colgroup width={89} />
                  <colgroup width={104} />
                  <colgroup width={94} />
                  <colgroup width={85} />
                  <colgroup width={119} />
                  <colgroup span={3} width={85} />
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={9}
                        height={61}
                        align="center"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <b>
                          <font size={7} color="#FFFFFF">
                            BULLETIN DE PAIE
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={4}
                        height={22}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <font size={3}>EMPLOYEUR:</font>
                        </b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={5}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <font size={3}>SALARIE:</font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        colSpan={2}
                        height={21}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>
                              Nom: {`${Payslip.NomEtPrénom}`}
                            </font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={2}
                        align="center"
                        valign="bottom"
                      >
                        <b>
                          <font size={3}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        colSpan={2}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>
                              Nom et Prénom: {`${Payslip.NomEtPrénom}`}
                            </font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        height={20}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>
                              Adresse: {`${Payslip.Adresse}`}
                            </font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={2}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>
                              Adresse: {`${Payslip.Adresse}`}
                            </font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        height={20}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>
                              CP et Ville : {`${Payslip.Adresse}`}
                            </font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={2}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>Numéro SS:</font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        height={20}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>Numéro APE:</font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={2}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>Convention collective:</font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        height={20}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>Numéro SIRET:</font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={2}
                        align="center"
                        valign="bottom"
                        sdnum="1033;0;#,##0"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>Emploi: {`${Payslip.Emploi}`}</font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        height={20}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>URSSAF:</font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={2}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={2}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>
                            <font size={3}>Coefficient:</font>
                          </i>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={4}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        height={10}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderTop: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderTop: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderTop: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderTop: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderTop: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderTop: "2px solid #000000" }}
                        align="center"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderTop: "2px solid #000000" }}
                        align="center"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="center"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Salaire de base
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "1px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval="151.67"
                        sdnum="1033;"
                      >
                        151.67
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval="9.88"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        9.88 €
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        Plafond SS :
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval={3311}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        3,311.00 €
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        HS à 25%
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "1px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval={0}
                        sdnum="1033;"
                      >
                        0
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval="12.35"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        12.35 €
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        HS à 50%
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "1px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval={0}
                        sdnum="1033;"
                      >
                        0
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval="14.82"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        14.82 €
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#FFFFFF"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={21}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <font size={3}>SALAIRE BRUT</font>
                        </b>
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <b>
                          <font size={3}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <b>
                          <font size={3}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <b>
                          <font size={3}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td
                        style={{ borderRight: "1px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <font size={3}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td
                        style={{
                          borderTop: "1px solid #000000",
                          borderBottom: "1px solid #000000",
                          borderLeft: "1px solid #000000",
                          borderRight: "1px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval={`${Payslip.PlafondSS}`}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <b>
                          <font size={3}>{`${Payslip.PlafondSS}`} €</font>
                        </b>
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="-1812.5004"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <font size={3} color="#BFBFBF">
                          -1,812.50 €
                        </font>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        height={12}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <br />
                        </b>
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <br />
                        </b>
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <br />
                        </b>
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <br />
                        </b>
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={3}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#000000">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={11}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        colSpan={3}
                        rowSpan={2}
                        height={36}
                        align="center"
                        valign="middle"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <font size={3}>COTISATIONS</font>
                        </b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>PART SALARIALE</b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={3}
                        align="center"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>PART PATRONALE</b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <b>Base</b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <b>Taux</b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <b>Montant</b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <b>Base</b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <b>Taux</b>
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <b>Montant</b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        CSG non déductible
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1453.544612"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,453.54 €
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.024"
                        sdnum="1033;0;0.00%"
                      >
                        2.40%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="34.885070688"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        34.89 €
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        CRDS non déductible
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1453.544612"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,453.54 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.005"
                        sdnum="1033;0;0.00%"
                      >
                        0.50%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="7.26772306"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        7.27 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Csg déductible
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1453.544612"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,453.54 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.051"
                        sdnum="1033;0;0.00%"
                      >
                        5.10%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="74.130775212"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        74.13 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>Sécurité sociale</b>
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Assurance maladie
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.0075"
                        sdnum="1033;0;0.00%"
                      >
                        0.75%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="11.238747"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        11.24 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.128"
                        sdnum="1033;0;0.00%"
                      >
                        12.80%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="191.8079488"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        191.81 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Assurance veuvage
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.001"
                        sdnum="1033;0;0.00%"
                      >
                        0.10%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="1.4984996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>Assurance vieillesse</b>
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        AV déplafonée
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.0655"
                        sdnum="1033;0;0.00%"
                      >
                        6.55%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="98.1517238"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        98.15 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.016"
                        sdnum="1033;0;0.00%"
                      >
                        1.60%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="23.9759936"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        23.98 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        AV plafonnée
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.082"
                        sdnum="1033;0;0.00%"
                      >
                        8.20%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="122.8769672"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        122.88 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Accidents du travail
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.073"
                        sdnum="1033;0;0.00%"
                      >
                        7.30%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="109.3904708"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        109.39 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Allocation familiales
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.054"
                        sdnum="1033;0;0.00%"
                      >
                        5.40%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="80.9189784"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        80.92 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>Aide au logement</b>
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        AL déplafonée
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.004"
                        sdnum="1033;0;0.00%"
                      >
                        0.40%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="5.9939984"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        5.99 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        AL plafonnée
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.001"
                        sdnum="1033;0;0.00%"
                      >
                        0.10%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="1.4984996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1.50 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>ASSEDIC</b>
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Assurance chômage tranche A
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.024"
                        sdnum="1033;0;0.00%"
                      >
                        2.40%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="35.9639904"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        35.96 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.04"
                        sdnum="1033;0;0.00%"
                      >
                        4.00%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="59.939984"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        59.94 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Assurance chômage tranche B
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.024"
                        sdnum="1033;0;0.00%"
                      >
                        2.40%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.04"
                        sdnum="1033;0;0.00%"
                      >
                        4.00%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Assurance chômage tranche AGS (FNGS)
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.004"
                        sdnum="1033;0;0.00%"
                      >
                        0.40%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="5.9939984"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        5.99 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>Caisse de retraite (non cadre)</b>
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        sdnum="1033;0;0.00%"
                      >
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={17}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Retraite complémentaire et AGFF tranche 1
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.038"
                        sdnum="1033;0;0.00%"
                      >
                        3.80%
                      </td>
                      <td
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="56.9429848"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        56.94 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="1498.4996"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        1,498.50 €
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.057"
                        sdnum="1033;0;0.00%"
                      >
                        5.70%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="85.4144772"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        85.41 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={18}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        Retraite complémentaire et AGFF tranche 2
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.069"
                        sdnum="1033;0;0.00%"
                      >
                        6.90%
                      </td>
                      <td
                        style={{ borderBottom: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        sdval="0.103"
                        sdnum="1033;0;0.00%"
                      >
                        10.30%
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval={0}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        0.00 €
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        colSpan={3}
                        height={22}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <font size={3}>TOTAL des cotisations</font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="320.07951456"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <b>
                          <font size={3}>320.08 €</font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval="687.8113164"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <b>
                          <font size={3}>687.81 €</font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        colSpan={3}
                        height={9}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        colSpan={3}
                        height={5}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={7}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={28}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <b>
                          <font size={4}>Net à payer</font>
                        </b>
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                        }}
                        align="left"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                      >
                        <br />
                      </td>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval={`${Payslip.NetPayer}`}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <font size={4}>{`${Payslip.NetPayer}`} €</font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={10}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <font size={4}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={22}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <i>Payé par virement bancaire le :</i>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <b>
                          <font size={3}>Salaire net imposable</font>
                        </b>
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom" bgcolor="#C0C0C0">
                        <font size={3}>
                          <br />
                        </font>
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="right"
                        valign="bottom"
                        bgcolor="#C0C0C0"
                        sdval={`${Payslip.salaireNetImposable}`}
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <b>
                          <font size={3}>
                            {`${Payslip.salaireNetImposable}`} €
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ borderLeft: "2px solid #000000" }}
                        height={6}
                        align="left"
                        valign="bottom"
                      >
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <b>
                          <font size={4}>
                            <br />
                          </font>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        align="left"
                        valign="bottom"
                        sdnum='1033;0;#,##0.00" €"'
                      >
                        <font size={4}>
                          <br />
                        </font>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td
                        style={{ borderRight: "2px solid #000000" }}
                        align="left"
                        valign="bottom"
                      >
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderTop: "2px solid #000000",
                          borderBottom: "2px solid #000000",
                          borderLeft: "2px solid #000000",
                          borderRight: "2px solid #000000",
                        }}
                        colSpan={9}
                        height={18}
                        align="center"
                        valign="bottom"
                        bgcolor="#000000"
                      >
                        <b>
                          <i>
                            <font color="#FFFFFF">
                              A CONSERVER SANS LIMITATION DE DUREE
                            </font>
                          </i>
                        </b>
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                      <td align="left" valign="bottom">
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Button
                style={{ marginTop: "5px" }}
                onClick={() => dispatch(deletePayslip(Payslip._id, Navigate))}
              >
                delete Payslip
              </Button>
            </div>
          )
        )
      ) : (
        <div>
          <h2 style={{ alignText: "center", Color: "black" }}>
            You don't have any Payslip
          </h2>
        </div>
      )}
    </div>
  );
});
