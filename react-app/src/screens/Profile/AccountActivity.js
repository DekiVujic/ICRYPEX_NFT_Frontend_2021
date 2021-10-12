import {Fragment, useMemo, useEffect, useState} from "react";
import DataTable from "../../components/DataTable";
import {Card, Container, Tab, Table, Tabs} from "react-bootstrap";
import accActData from "../../accActData.json";
import { BalanceHistoryCols, PurchaseHistoryCols, SellingCols, SalesHistoryCols } from "../../constants";

function AccountActivity(props){
    const [data, setData] = useState([]);

    const balanceHistoryCols = useMemo(
        () => BalanceHistoryCols,[]
    );
    const purchaseHistoryCols = useMemo(
        () => PurchaseHistoryCols,[]
    );
    const sellingCols = useMemo(
        () => SellingCols,[]
    );
    const salesHistoryCols = useMemo(
        () => SalesHistoryCols,[]
    );

    useEffect(() => {
        setData(accActData);
    }, []);
   

    return (
        <Card style={{ width: '100%', height: '70vh' }} className="text-center">
            <Card.Body >
                <Tabs defaultActiveKey="balance_history" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="balance_history" title="Balance History">
                        <Container style={{height:"70vh"}}>
                            <DataTable  columns={balanceHistoryCols} data={data} />
                        </Container>
                    </Tab>
                    <Tab eventKey="purchase_history" title="Purchase History" >
                        <Container style={{height:"70vh"}}>
                            <DataTable  columns={purchaseHistoryCols} data={data} />
                        </Container>
                    </Tab>
                    <Tab eventKey="selling" title="Selling"> 
                        <Container style={{height:"70vh"}}>
                            <DataTable  columns={sellingCols} data={data} />
                        </Container>
                    </Tab>
                    <Tab eventKey="sales_history" title="Sales History"> 
                        <Container style={{height:"70vh"}}>
                            <DataTable  columns={salesHistoryCols} data={data} />
                        </Container>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}

export  default AccountActivity