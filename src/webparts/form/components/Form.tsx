import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { SPFI, spfi, SPFx } from "@pnp/sp";

export interface IFormDetails {
  formId: string;
  sectionId: string;
  rowId: string;
}
// let sp: ISPFXContext;
export interface IMyWebPartProps {
  context: WebPartContext;
}

export interface IMyWebPartState {
  formDetails: IFormDetails | null;
  sections: any[]; // You need to define the actual data structure
  rows: any[]; // You need to define the actual data structure
  controls: any[]; // You need to define the actual data structure
}

export default class Form extends React.Component<IMyWebPartProps, IMyWebPartState> {
  constructor(props: IMyWebPartProps) {
    super(props);
        // sp = SPFx(this.context);
    this.state = {
      formDetails: null,
      sections: [],
      rows: [],
      controls: [],
    };
  }

  public async componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const formId = queryParams.get('formId');

    if (formId) {
      // Load form details
      // const formDetails: IFormDetails = await this.getFormDetails(formId);
      // this.setState({ formDetails });

      // // Load sections
      // const sections = await this.getSections(formId);
      // this.setState({ sections });

      // Load rows and controls
      // const rowsAndControls = await this.getRowsAndControls(sections);
      // this.setState({ rows: rowsAndControls.rows, controls: rowsAndControls.controls });
    }
  }

  // private async getFormDetails(formId: string): Promise<IFormDetails> {
  //   const formDetailsItem = await sp.lists.getByTitle('Forms').items.getById(parseInt(formId, 10)).get();
  //   return {
  //     formId: formDetailsItem.Id.toString(),
  //     sectionId: formDetailsItem.SectionId.toString(),
  //     rowId: formDetailsItem.RowId.toString(),
  //   };
  // }

  // private async getSections(formId: string): Promise<any[]> {
  //   const sections = await sp.web.lists.getByTitle('Sections').items
  //     .filter(`FormId eq ${formId}`)
  //     .get();
  //   return sections;
  // }

  // private async getRowsAndControls(sections: any[]): Promise<{ rows: any[]; controls: any[] }> {
  //   const rows: never[] = [];
  //   const controls: never[] = [];

    // for (const section of sections) {
    //   const sectionRows = await sp.web.lists.getByTitle('Section%20Rows').items
    //     .filter(`SectionId eq ${section.Id}`)
    //     .get();
    //   rows.push(...sectionRows);

    //   for (const row of sectionRows) {
    //     const rowControls = await sp.web.lists.getByTitle('Row%20Controls').items
    //       .filter(`RowId eq ${row.Id}`)
    //       .get();
    //     controls.push(...rowControls);
    //   }
    // }

  //   return { rows, controls };
  // }

  public render(): React.ReactElement<IMyWebPartProps> {
    const { formDetails, sections } = this.state;

    return (
      <div>
        <h2>Form Details</h2>
        {formDetails && (
          <div>
            <p>Form ID: {formDetails.formId}</p>
            <p>Section ID: {formDetails.sectionId}</p>
            <p>Row ID: {formDetails.rowId}</p>
          </div>
        )}

        <h2>Sections</h2>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>{section.Title}</li>
          ))}
        </ul>

        {/* Render rows and controls similarly */}
      </div>
    );
  }
}
