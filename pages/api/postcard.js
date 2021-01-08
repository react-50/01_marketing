import firebaseAdmin from "../../utils/firebaseAdmin";
import firebase from "../../utils/firebaseAdmin";

export default (req, res) => {
  firebase
    .collection("01marketing")
    .doc(req.query.name)
    .get()
    .then((doc) => {
      res.json(doc.data());
    })
    .catch((error) => {
      res.json({ error });
    });
};
