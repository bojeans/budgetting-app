interface DocumentWithId {
    _id: string;
  }
  
const formatID = (doc: DocumentWithId): { id: string } => {
    const { _id, ...rest } = doc;
    return { id: _id.toString(), ...rest };
  };

  export default formatID;
  