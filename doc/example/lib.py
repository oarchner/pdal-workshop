import numpy as np

def max_z_cluster(ins, outs):           
    max = {}
    # Index des Punktes mit max z je Cluster
    it = np.nditer(ins["Z"], flags=['f_index'])
    for z in it:    
        c = ins['ClusterID'][it.index]
        if c not in max:
            max[c] = it.index
        else:            
            if ins['Z'][max[c]] < z:
                max[c] = it.index

    # Ausgabe über Maske
    outs['Mask'] =  np.zeros(len(ins["Z"]), dtype = bool)        
    for index in max.values():
        outs["Mask"][index] = True    
                
    return True
