export interface Acct {
    acct:string
   }

  export interface IError {
    message: string | undefined;
}

export interface INav{
    Acctbalance: string;
    Connect: string;
}

	
	export interface GetAcct {
        getAcct: Function
    }