import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="col-md-10 offset-md-1">
          <div className="row">
            <div className="col-md-8">
              <h2>Title about stuff</h2>
              <h6>Category | Posted by Whatever on Nov 27, 2017 at 23:34</h6>
            </div>
            <div className="col-md-2 offset-md-2">
              <div className="vote-count float-right">
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                <span className="px-1">15</span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
                <div className="actions-buttons float-right">
                  <a href="" className="pr-1">edit</a>
                  <a href="" className="pr-1" >delete</a>
                </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12 post-body">
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negat esse eam, inquit, propter se expetendam. Quo plebiscito decreta a senatu est consuli quaestio Cn. <mark>Eam stabilem appellas.</mark> Quid enim possumus hoc agere divinius? Mene ergo et Triarium dignos existimas, apud quos turpiter loquare? Duo Reges: constructio interrete. </p>

              <p className="text-justify"><b>Non laboro, inquit, de nomine.</b> <b>Is es profecto tu.</b> Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. <a href='http://loripsum.net/' target='_blank rel=:noopener:'>Hoc ipsum elegantius poni meliusque potuit.</a> <a href='http://loripsum.net/' target='_blank rel=:noopener:'>Quid dubitas igitur mutare principia naturae?</a> Est tamen ea secundum naturam multoque nos ad se expetendam magis hortatur quam superiora omnia. <b>Primum divisit ineleganter;</b> <a href='http://loripsum.net/' target='_blank rel=:noopener:'>Quare conare, quaeso.</a> <a href='http://loripsum.net/' target='_blank rel=:noopener:'>Perge porro;</a> Videmus igitur ut conquiescere ne infantes quidem possint. <i>Nunc omni virtuti vitium contrario nomine opponitur.</i> <mark>Suo genere perveniant ad extremum;</mark> </p>

              <p className="text-justify">Omnes enim iucundum motum, quo sensus hilaretur. Illud dico, ea, quae dicat, praeclare inter se cohaerere. Totum autem id externum est, et quod externum, id in casu est. <i>Omnia contraria, quos etiam insanos esse vultis.</i> </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="comments">
          <div className="col-md-8 offset-md-2">
            <div className="card my-4">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" rows="2"></textarea>
                  </div>
                  <div className="form-group input-group">
                    <span className="input-group-addon">Author:</span>
                    <input type="text" className="form-control" id="comment-author" placeholder="Example input" />
                  </div>
                  <button type="submit" className="btn btn-primary float-right">Submit</button>
                </form>
              </div>
            </div>

            <div className="comment media mb-4">
              <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
              <div className="media-body">
                <div className="header">
                  <h5 className="t-0 d-inline">Commenter Name</h5>
                  <div className="vote-count d-inline pl-4">
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    <span className="px-1">15</span>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                  <div className="actions-buttons d-inline float-right">
                    <a href="" className="pr-1">edit</a>
                    <a href="" className="pr-1" >delete</a>
                  </div>
                </div>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
