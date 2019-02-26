import React from "react";
import Link from "next/link";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";

/* Expects a "bcbcLinks" prop containing an:
array with "name" and "path" of each subnav

e.g.. in the file you are using <SubNav /> write:

const subNavList = [{name: '地質景觀', path: '/conservation/geo-landscape'}, ..]
..
// use the component and add the props "subNavList" to the tag 
<SubNav subNavList={subNavList} />
..
*/

const Breadcrumbs = (props) => {
  const { bcLinks } = props;

  return (
    <div id="breadcrumbs" className="container">
      <div className="row">
        <div className="col-md-8">
          <Breadcrumb>
            {/* Create & return breadcrumbs if "bcLinks" props 
          provided, else just return null */}

            {bcLinks
              ? bcLinks.map((link) =>
                  // if "path" property provided it's a link so
                  // stick link in a <Link href="">
                  link.path ? (
                    <BreadcrumbItem key={link.name}>
                      <Link href={link.path}>
                        <a>{link.name}</a>
                      </Link>
                    </BreadcrumbItem>
                  ) : (
                    // else return breadcrumbs without a link
                    <BreadcrumbItem active key={link.name}>
                      {link.name}
                    </BreadcrumbItem>
                  )
                )
              : null}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
