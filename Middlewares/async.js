const asyncWrapper = (fn) =>{    //alternavite to try catch
    return async(req,res,nxt) =>{
        try {
          await fn(req,res,nxt);
        }

        catch (error) {
         nxt(error);
        }
    }
};

module.exports = asyncWrapper