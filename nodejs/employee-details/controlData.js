const getEmpByProjectID = (empList,projectList,_projectID)=>{

    let result=null;
    let filteredProject = projectList.find((p)=>{
        return p.id == _projectID
    });
    if(filteredProject!=undefined)
    {
        let filteredEmp = empList.filter(emp => {
            return emp.projectID == _projectID
        });
        result = [
            {
                projectID : filteredProject.id,
                projectName : filteredProject.name,
                employees : filteredEmp
            }
        ];
    }
    else
        result = {error : `No project with ID : ${_projectID}`};
    
    return result;
}
const getEmpByProject = (_empList,_projectList)=>{

    let result=[]
    _projectList.forEach(project => {
        result.push(getEmpByProjectID(_empList,_projectList,project.id));
    });
    //console.log(result);
    return result;
}

module.exports = {
    getEmpByProjectID,
    getEmpByProject
}